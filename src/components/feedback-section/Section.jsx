import PropTypes from 'prop-types';

export const FeddbackSection = ({ title, children }) => {
    return (
        <section style={{ width: "300px", margin: "0 auto", padding: "20px" }}>
            <h2 style={{ marginBottom: "10px" }}>{title}</h2>
            <div>{children}</div>
        </section>)
};

FeddbackSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}