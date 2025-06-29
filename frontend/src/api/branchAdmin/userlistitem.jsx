const UserItem = ({ user }) => (
  <tr className="border-t hover:bg-gray-50">
    <td className="p-3">{user.fullname}</td>
    <td className="p-3">{user.gender}</td>
    <td className="p-3">{user.birthdate}</td>
    <td className="p-3">{user.phonenumber}</td>
    <td className="p-3">{user.occupation}</td>
    <td className="p-3">{user.email}</td>
    <td className="p-3">{user.address}</td>
    <td className="p-3">{user.governmentid}</td>
    <td className="p-3">{user.roomnumber}</td>
    <td className="p-3">{user.contactname}</td>
    <td className="p-3">{user.contactnumber}</td>
    <td className="p-3">{user.relationshipcontact}</td>
    <td className={`p-3 font-semibold ${user.approval === 'Validating...' ? 'text-gray-500' : 'text-green-700'}`}>
      {user.approval}
    </td>
    <td className={`p-3 font-semibold ${user.status === 'Active' ? 'text-green-700' : 'text-gray-500'}`}>
      {user.status}
    </td>
  </tr>
);

export default UserItem;
