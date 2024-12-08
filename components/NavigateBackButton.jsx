import { useNavigate } from "react-router-dom";

const NavigateBackButton = () => {
    let navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}

export default NavigateBackButton