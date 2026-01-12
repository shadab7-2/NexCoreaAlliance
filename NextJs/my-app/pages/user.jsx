export async function getServerSideProps() {
    const user = await fetch("http://jsonplaceholder.typicode.com/users");
    const data = await user.json();
    return{
      props: {data},
    }
    
};

export default function UserList({data}){
    return(
        <div>
            <h1>Users List</h1>
            <ol>{
                data.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
                }</ol>
        </div>
    )
}