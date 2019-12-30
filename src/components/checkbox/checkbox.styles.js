import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export const Container = styled.div`
  ${tw`py-2 flex items-center`};
`;

export const Label = styled.label`
  ${tw`flex items-center relative cursor-pointer`};

  input {
    ${tw`hidden`};
  }

  input:checked ~ span {
    background-color: blue;
  }

  &:hover input ~ span {
    ${tw`border-gray-900`};
  }
`;

export const CustomCheckbox = styled.span`
  ${tw`ml-2 w-6 h-6 border border-solid border-gray-400`};
`;

export const inputCss = tw`absolute opacity-0`;
