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

  &:hover input:not(:checked) ~ span:after {
    ${tw`bg-gray-400`};
    margin: 2px;
  }

  input:checked ~ span:after {
    ${tw`bg-blue-500`};
  }
`;

export const CustomCheckbox = styled.span`
  ${tw`ml-2 w-6 h-6 border border-solid border-gray-400`};
  position:relative;

  :after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    margin: 2px;
  }
`;

export const CheckboxField = styled.input`
  position: absolute;
  opacity: 0;
`;
