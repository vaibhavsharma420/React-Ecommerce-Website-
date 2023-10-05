import React from 'react'
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {BsStarHalf} from 'react-icons/bs';
import { TbNumbers } from 'react-icons/tb';
import styled from 'styled-components';

const Star = ({stars, reviews}) => {
  
        //<AiFillStar/> <AiOutlineStar/> <BsStarHalf/>
        
        const ratingStar= Array.from({length:5},(elem, index)=>{
            let number= index+0.5;

            return(
                <>
                    <span key={index}>
                        {stars>= index+1
                        ? <AiFillStar className='icon'/>
                        : stars>= number
                        ? <BsStarHalf className='icon'/>
                        :<AiOutlineStar className='icon'/>
                        }

                    </span>
                </>
            )
        })

        return(
            <>
                <Wrapper>
                    <div className='icon-style'>
                        {ratingStar}
                        <p>({reviews} customer reviews)</p>
                    </div>
                </Wrapper>
            </>
        );
    
  
}

const Wrapper= styled.section`

.icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;
