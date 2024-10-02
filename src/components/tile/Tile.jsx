import PropTypes from "prop-types";


const Tile = ({ name, description }) => {
    return (
        <div>
            <p className="tile-title">{name}</p>
            {Object.values(description).map((desc, index) => (
                <p key={index}>{desc}</p>
            ))}
        </div>
    )
}

Tile.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.object,
    ]).isRequired,
};

export default Tile;