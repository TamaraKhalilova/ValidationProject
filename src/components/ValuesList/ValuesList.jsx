import { useSelector } from 'react-redux';

export const ValuesList = () => {
    const storeData = useSelector((state) => state.user);
    const getList = () => Object.values(storeData).map((value, i) => <li key={i + value}>{value}</li>)

    return (
        <div>
            <h3>Values list:</h3>
            <ul>
                {getList()}
            </ul>
        </div>
    )
}
