const List = ({ user: { name, picture, location, email, phone, cell } }) => {
  return (
    <li className="py-4 list-none border rounded-lg p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-20 w-20 rounded-tl-3xl rounded-br-3xl"
            src={picture.medium}
            alt={`Profile for ${name.first} ${name.last}`}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <span className="font-medium text-gray-900">Name: </span>
            {`${name.first} ${name.last}`}
          </p>
          <p className="text-sm text-gray-500"><span className="font-medium text-gray-900" >Email: </span>{email}</p>
          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-900">Address: </span>
            {`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`}
          </p>
          <p className="text-sm text-gray-500"><span className="font-medium text-gray-900">Phone: </span>{phone}</p>
          <p className="text-sm text-gray-500"><span className="font-medium text-gray-900">Cell: </span>{cell}</p>
        </div>
      </div>
    </li>
  );
};

export default List;
