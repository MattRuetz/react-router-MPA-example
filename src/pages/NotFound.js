import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    setTimeout(() => navigate('/'), 3000);

    return <h1 style={{ textAlign: 'center' }}>404: NOT FOUND!</h1>;
}

export default NotFound;
