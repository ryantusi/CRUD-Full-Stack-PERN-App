import { useState, useEffect } from "react";
import { createMember, updateMember } from "../utils/index.js";

export default function Modal({ id, Heading, Type, Name, Job, Status }) {
    const [newName, setNewName] = useState(Name || "");
    const [newJob, setNewJob] = useState(Job || "");
    const [newStatus, setNewStatus] = useState(Status ?? true);

    // Sync state with props whenever modal gets new data
    useEffect(() => {
        setNewName(Name || "");
        setNewJob(Job || "");
        setNewStatus(Status ?? true);
    }, [Name, Job, Status]);

    const handleAdd = async(e) => {
        e.preventDefault();
        try {
            const res = await createMember(newName, newJob, newStatus);
            if(!res.error) {
                setNewName("");
                setNewJob("");
                setNewStatus(true);
                document.getElementById(`modal-${id}`).close();
                window.location.reload();
            }
        } catch (error) {
            console.error("Update Error: ", error.message);
        }
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            const res = await updateMember(id, newName, newJob, newStatus);
            if(!res.error) {
                setNewName("");
                setNewJob("");
                setNewStatus(true);
                document.getElementById(`modal-${id}`).close();
                window.location.reload();
            }
        } catch (error) {
            console.error("Error: ", error.message);
        }
    };

    return ( 
        <dialog id={`modal-${id}`} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{Heading}</h3>

                {Type === "Add" ? (
                    <form onSubmit={handleAdd}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">What is the name?</legend>
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Name" 
                                value={newName} 
                                onChange={(e)=> setNewName(e.target.value)} 
                                required 
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">What is the job?</legend>
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Job" 
                                value={newJob} 
                                onChange={(e)=> setNewJob(e.target.value)} 
                                required 
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">What's the status?</legend>
                            <select 
                                className="select" 
                                value={newStatus} 
                                onChange={(e)=>setNewStatus(e.target.value === "true")} 
                                required
                            >
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </fieldset>
                        <input type="submit" className="btn btn-success btn-outline" value="Submit"/>
                    </form>
                ) : (
                    <form onSubmit={handleUpdate}>
                        <fieldset className="fieldset">
                            <input 
                                type="text" 
                                className="input" 
                                value={newName} 
                                onChange={(e)=>setNewName(e.target.value)} 
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <input 
                                type="text" 
                                className="input" 
                                value={newJob} 
                                onChange={(e)=>setNewJob(e.target.value)} 
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <select 
                                className="select" 
                                value={newStatus} 
                                onChange={(e)=>setNewStatus(e.target.value === "true")}
                            >
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <input type="submit" className="btn btn-info btn-outline" value="Update"/>
                        </fieldset>
                    </form>
                )}
            </div>
        </dialog>
    );
}
