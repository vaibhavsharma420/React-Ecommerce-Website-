import styled from "styled-components";

const Trusted=()=>{
    return(
        <>
            <Wrapper className="brand-section">
            <div className="container">
                <h3>Trusted by 1000+ Companies</h3>
                <div className="brand-section-slider">
                <div className="slide">
                    <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/25112721/Rolex_BrandCrowd.png" alt="trusted brands"/>
                </div>
                <div className="slide">
                    <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/25112718/Louis_vuitton_BrandCrowd.png" alt="trusted brands"/>
                </div>
                <div className="slide">
                    <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/25112711/Chanel_BrandCrowd.png" alt="trusted brands"/>
                </div>
                <div className="slide">
                    <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/11/25112719/Prada_BrandCrowd.png" alt="trusted brands"/>
                </div>
                <div className="slide">
                    <img src="https://logo.com/image-cdn/images/kts928pd/production/58113dc0cf554d09f5d8df21a4a144cb9aff5ebd-1140x620.png?w=1080&q=72" alt="trusted brands"/>
                </div>

                </div>
            </div>

            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 18rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    padding: 3rem;
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;