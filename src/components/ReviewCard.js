import styled from 'styled-components'

export default function ReviewCard() {
    return (
        <ReviewWrapper className="card review-card">
            <h1>Review One</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia velit a feugiat finibus. Morbi iaculis diam id tellus iaculis, eu pretium metus fermentu</p>
        </ReviewWrapper>
    )
}
const ReviewWrapper = styled.div`
    width: 50rem;
    white-space: wrap;
`