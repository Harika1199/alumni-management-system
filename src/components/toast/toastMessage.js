import {React,Component} from 'react';
import { toast } from 'react-toastify';
import './toast.css';

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
        // Configure toast
        toast.configure();
    }
    
    /**
     * Reusable method 
     * @param  message - defined message
     */
    notify(message) {
        toast(message);
    };

    render() { 
        return ( <></> );
    }
}

const ToastMessage = new Toast();
export default ToastMessage;

