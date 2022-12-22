import React, { useState } from 'react'
import PositionCard from './PositionCard'
import Button from '../../../../Components/Form/Button'
import FileUpload from '../../../../Components/Form/FileUpload'
import InputField from '../../../../Components/Form/InputField'
import Select from '../../../../Components/Form/Select'
import FormLayout from '../../../../Components/Layout/FormLayout'
import "../../../../Styles/AddCandidate.css"
import apiCall from '../../../../Services/apiCall'

const AddCandidates = ({ goBack, candidatesList,addCandidate,removeCandidate }) => {

    const [formData, setFormData] = useState({
        registerNumber: "",
        name: "",
        batch: "",
        position: "",
    });

    const [registerNumberError, setRegisterNumberError] = useState("")

    const { registerNumber, name, batch, position } = formData

    const onChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const searchVoter = async () => {
        setRegisterNumberError("")
        const response = await apiCall("/admin/get-voter",
            "POST",
            {
                registerNumber
            })
        if (response.data) {
            setFormData(prev => ({
                ...prev,
                ...response.data
            }))
            return
        }
        setRegisterNumberError("Please Enter a Valid register number")
    }

    const submit = (e)=>{
        e.preventDefault();
        addCandidate(formData)

    }
    return (
        <>
            <FormLayout title={"Add Candidate"}>

                <form onSubmit={submit}>
                    <div className="candidate-form-container">
                        <div className="form-left-section">
                            <div className="form-input-section">
                                <InputField
                                    Label="Search Candidate"
                                    placeholder="Reg.No"
                                    value={registerNumber}
                                    onChange={(v) => onChange("registerNumber", v)}
                                    error={registerNumberError}
                                />
                                <Button onClick={searchVoter} type='button' title="search" />
                            </div>

                            <InputField
                                Label="Department"
                                placeholder="department"
                            />

                            <Select
                                Label="Select Position"
                                placeholder="choose one"
                                options={candidatesList}
                                value={position}
                                onChange={(v) => onChange("position", v)}
                            />

                        </div>
                        <div className="form-right-section">
                            <InputField
                                Label="Full Name"
                                placeholder="name"
                                value={name}
                            />

                            <InputField
                                Label="Batch"
                                placeholder="batch"
                                value={batch}
                            />

                            <FileUpload
                                Label="Select Avatar"
                                type='file'
                            />
                        </div>
                    </div>
                    <div className="button-section">
                        <Button type='submit' color="#66BCCF" title="Add" />
                        <Button type='button' title="Clear" />
                    </div>
                </form>
            </FormLayout>


            <div className="election-view-section candidate-view-section">
                {candidatesList.map(position =>
                    <PositionCard removeCandidate={removeCandidate}{...position} key={position.position} />
                )
                }
            </div>

            <div className='btn-draft-section'>
                <Button type='button' color="#9592A6" title="Save Draft" />
            </div>
            <div className="button-section">

                <Button type='button' title="Prev" onClick={goBack} />
                <Button type='button' color="#2d7feb" title="Publish" />
            </div>


        </>
    )
}

export default AddCandidates