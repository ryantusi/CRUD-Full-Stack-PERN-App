import Modal from "./Modal";

export default function Table() {
    const clients = [
        { id: 1, name: "Cy Ganderton", job: "Quality Control Specialist", isActive: true },
        { id: 2, name: "Hart Hagerty", job: "Desktop Support Technician", isActive: false },
        { id: 3, name: "Brice Swyre", job: "Tax Accountant", isActive: true },
        { id: 4, name: "Ryan Tusi", job: "Bakchodi", isActive: false },
        { id: 5, name: "Ahmed Boi", job: "Gaan Masti", isActive: true },
    ];

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
                            <tr>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.job}</td>
                                <td><button className={`btn rounded-full btn-primary ${client.isActive ? `btn-active` : `btn-outline`}`}>{client.isActive ? "Active" : "Inactive"}</button></td>
                                <td><button className="btn btn-soft btn-info" onClick={()=>document.getElementById(`modal-update-${client.id}`).showModal()}>Update</button></td>
                                <Modal 
                                   id={`modal-update-${client.id}`} 
                                   Heading={`Update Member ${client.id}`} 
                                   Type="Update"
                                   Name={client.name}
                                   Job={client.job}
                                   Status={client.isActive}
                                />
                                <td><button className="btn btn-soft btn-error">Delete</button></td>
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