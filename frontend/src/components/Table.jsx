import { useState, useEffect } from "react";
import Modal from "./Modal";
import { fetchData, deleteMember } from "../utils/index";

export default function Table() {
    // Sample Data:
    // const clients = [
    //     { id: 1, name: "Cy Ganderton", job: "Quality Control Specialist", status: true },
    //     { id: 2, name: "Hart Hagerty", job: "Desktop Support Technician", status: false },
    //     { id: 3, name: "Brice Swyre", job: "Tax Accountant", status: true },
    //     { id: 4, name: "Ryan Tusi", job: "Bakchodi", status: false },
    //     { id: 5, name: "Ahmed Boi", job: "Gaan Masti", status: true },
    // ];

    const [clients, setClients] = useState([]);
    const fetchClients = async() => {
        try {
            const res = await fetchData();
            setClients(res);
        } catch (error) {
            console.error("Error: ", error.message);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const handleDelete = async(id) => {
        try {
            const res = await deleteMember(id);
            if(!res.error) {
                fetchClients();
            }
        } catch (error) {
            console.error("Error: ", error.message);
        }
    }

    return ( 
        <>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    clients.map((client) => {
                        return (
                            <tr key={client.id}>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.job}</td>
                                <td><button className={`btn rounded-full btn-primary ${client.status ? `btn-active` : `btn-outline`}`}>
                                        {client.status ? "Active" : "Inactive"}
                                    </button>
                                </td>
                                <td><button 
                                        className="btn btn-soft btn-info"
                                        onClick={()=>document.getElementById(`modal-${client.id}`).showModal()}
                                    >Update</button>
                                    <Modal 
                                        id={client.id} 
                                        Heading={`Update Member ${client.id}`} 
                                        Type="Update"
                                        Name={client.name}
                                        Job={client.job}
                                        Status={client.status}
                                    />
                                </td>
                                <td><button 
                                        className="btn btn-soft btn-error" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleDelete(client.id);
                                        }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
        </>
    )
}