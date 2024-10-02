import PropTypes from "prop-types";
import Tile from "../tile/Tile";


const TileList = ({ items = [] }) => {
    return (
        <div>
            {items.map((item) => (
                <Tile
                    key={item.id}
                    name={item.name}
                    description={item.description}
                />
            ))}
        </div>
    )
}

TileList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.object,
        })
    ).isRequired,
};

export default TileList;