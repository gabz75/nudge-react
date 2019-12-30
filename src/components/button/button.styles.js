import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export const DefaultButtonTag = styled.button`
  ${tw`
    focus:outline-none
    bg-blue-500
    hover:bg-blue-400
    text-white
    border-yellow-100
    hover:border-blue-500
    rounded
    cursor-pointer
    font-bold
  `};
`;

export const SmallButtonTag = styled(DefaultButtonTag)`
  ${tw`py-1 px-2 text-xs`};
`;

export const MediumButtonTag = styled(DefaultButtonTag)`
  ${tw`py-2 px-4 text-sm`};
`;

export const TAG_SIZE_MAPPING = {
  sm: SmallButtonTag,
  md: MediumButtonTag,
};

export const ButtonTagFor = (size) => TAG_SIZE_MAPPING[size];
