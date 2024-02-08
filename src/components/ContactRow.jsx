export default function ContactRow(props) {
    const {firstIndex} = props;
    return (
        <tr>
            <td>{firstIndex.name}</td>
            <td>{firstIndex.email}</td>
            <td>{firstIndex.phone}</td>
        </tr>
    )
}
// { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" }