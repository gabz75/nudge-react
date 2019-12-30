import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

export const Container = styled.label`
  ${tw`flex flex-col`};
`;
export const Label = styled.label`
  ${tw`py-2 inline-block w-full appearance-none leading-normal`};
`;

export const InputField = styled.input`
  ${tw`
    focus:outline-none
    focus:border-gray-500
    border
    border-solid
    border-gray-300
    p-2
    inline-block
    appearance-none
    leading-normal
  `};
`;

export default {};
