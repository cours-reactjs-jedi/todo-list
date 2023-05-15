function MyList() {
  const myList = [
    { name: "marc", id: 1, lastname: "marcus" },
    { name: "john", id: 2, lastname: "Johny" },
    { name: "test", id: 3, lastname: "testtetst" },
    { name: "te", id: 4, lastname: "ttetst" },
  ];

  return <div>
    <ul>
    {myList.map((user) => {
      return (
        <li key={user.id}>{user.name} {user.lastname}</li>
      )
    } )}
    </ul>
  </div>;
}

export default MyList