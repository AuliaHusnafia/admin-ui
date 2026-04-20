import react from 'react'

function UserCard(props) {
    const { name, email, street, city } = props;
    

    return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {props.email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {props.street}, {props.city}
      </p>
    </div>
  );
}

export default UserCard;