export default function ServiceForm() {
    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Phone</label>
                <input type="tel" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Service</label>
                <select name="" id="" className="form-control">
                    <option value="Leak" >Leak</option>
                </select>
            </div>
        </form>
        </>
    )
}