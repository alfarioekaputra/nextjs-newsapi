import _ from "lodash/fp";

const Input = ({ label, name, value, onChange, register, required, errors }) => {

    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input 
                    className={_.get(`${name}.type`, errors) === "required" ? 'input is-danger' : 'input'} 
                    type="text" 
                    name={name} 
                    value={value} 
                    placeholder={`Input ${name}`} 
                    onChange={onChange}
                    ref={register({ required })}
                    />
                {_.get(`${name}.type`, errors) === "required" && (
                    <p className="help is-danger">This field is required</p>
                )}
            </div>
        </div>
    )
}

export default Input;