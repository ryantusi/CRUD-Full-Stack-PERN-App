export default function Modal({ id, Heading, Type, Name, Job, Status }) {
    return ( 
        <>
            <dialog id={id} className="modal">
            <div className="modal-box">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{Heading}</h3>
                {
                    Type === "Add" ? 
                    (
                        <form>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">What is the name?</legend>
                                <input type="text" className="input" placeholder="Name" required />
                                <p className="label">Required</p>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">What is the job?</legend>
                                <input type="text" className="input" placeholder="Job" required />
                                <p className="label">Required</p>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">What's the status?</legend>
                                <select defaultValue="Pick a color" className="select">
                                    <option disabled={true}>Select a Status</option>
                                    <option value={true}>Active</option>
                                    <option value={false}>Inactive</option>
                                </select>
                                <p className="label">Required</p>
                            </fieldset>
                            <input type="submit" className="btn btn-success btn-outline" value="Submit"/>
                        </form>
                    ) 
                    : 
                    (
                        <form>
                            <fieldset className="fieldset">
                                <input type="text" className="input" value={Name} required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <input type="text" className="input" value={Job} required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <select defaultValue={Status} className="select">
                                    <option value={true}>Active</option>
                                    <option value={false}>Inactive</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <input type="submit" className="btn btn-info btn-outline" value="Update"/>
                            </fieldset>
                            
                        </form>
                    )
                }
            </div>
            </dialog>
        </>
    )
};