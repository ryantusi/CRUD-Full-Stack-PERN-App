import Modal from "./Modal";

export default function Navbar() {
    return ( 
        <>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CRUD Full Stack App</a>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <button className="btn btn-active btn-accent" onClick={()=>document.getElementById('modal-add').showModal()}>Add</button>
                <Modal 
                    id="add" 
                    Heading="Add New Member"
                    Type="Add"
                />
            </div>
            </div>
        </>
    )
}