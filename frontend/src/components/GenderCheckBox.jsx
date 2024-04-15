import React from 'react'

function GenderCheckBox() {
    return (
        <div className='flex '>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text mr-2">Male</span>
                    <input type="checkbox"  className="checkbox checkbox-success" />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text mr-2">Female</span>
                    
                    <input type="checkbox"  className="checkbox checkbox-success" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
