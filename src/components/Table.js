import "./Table.css"
export default function Table({games}){

    const renderedRows = games.map((game)=>{
        return <tr key={game.id}>
                    <td><img src={game.game.photoURL}/></td>
                    <td>{game.game.title}</td>
                    <td>{game.rating}</td>
                    <td>{game.status}</td>
                    <td>{game.review}</td>
                </tr>;
    })
    return (
        <table>
            <thead>
                <tr>
                    <th className="image">Image</th>
                    <th className="title">Title</th>
                    <th className="rating">Rating</th>
                    <th className="status">Status</th>
                    <th className="review">Review</th>
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}