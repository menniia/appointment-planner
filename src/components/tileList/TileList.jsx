import Tile from "../tile/Tile";


const TileList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <Tile
                    key={item.key}
                    name={item.name}
                    description={item.description}
                />
            ))}
        </div>
    )
}

export default TileList;