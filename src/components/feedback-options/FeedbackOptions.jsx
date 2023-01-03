import { FeedbackButton, OptionsWrapper } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <OptionsWrapper style={{ marginBottom: "20px" }}>
            {options.map((item, index) => {
                return (<FeedbackButton type="button" key={index} onClick={() => onLeaveFeedback(item)} >{item}</FeedbackButton>)
            })
            }
        </OptionsWrapper>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}