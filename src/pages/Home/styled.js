import styled from "styled-components";

const StyledWrapper = styled.section`
  min-height: 100vh;
  padding: 1rem 2rem;
  .header {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 2px solid rgba(222, 222, 222, 0.3);
  }
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .item {
      width: 16rem;
      padding: 1rem 0.8rem 1.4rem 0.8rem;
      margin-bottom: 1rem;
    }
  }
`;

export default StyledWrapper;
