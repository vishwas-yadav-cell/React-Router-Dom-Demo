import React from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import './css/FormComponent.css';

const FormComponent = () => {
    return (
        <div className='formComponent'>
            <form>
                <div className='input1 inputDivs'>
                    <AttachmentIcon className='inputIcons'/>
                    <input type="number" placeholder='Adhaar Number' />
                </div>

                <div className='input1 inputDivs'>
                    <PersonPinIcon className='inputIcons'/>
                    <input type="text" placeholder='Adhaar Holder fullName' />
                </div>

                <div className='input1 inputDivs'>
                    <CallIcon className='inputIcons'/>
                    <input type="number" placeholder='Adhaar Reg. Mobile Number' />
                </div>
                <Button className='btn' variant="contained" color="primary">
                    Login <ArrowForwardIcon />
                </Button>
            </form>
        </div>
    );
}

export default FormComponent;