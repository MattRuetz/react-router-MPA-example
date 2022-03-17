import { useLocation } from 'react-router-dom';

function Contact() {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get('name');
    //?name=

    return (
        <div>
            <h2>Hey {name}, contact me here:</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit magnam veniam, nam et nisi, iste eveniet perferendis
                facere reprehenderit rerum dolore ullam fugit soluta
                voluptatibus aut, alias quas dolorem dolor!
            </p>
        </div>
    );
}

export default Contact;
