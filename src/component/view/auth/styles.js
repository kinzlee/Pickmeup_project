import styled from 'styled-components/native';
import Text from '../../widget/text';

export const StyledView = styled.View`
background-color: #2972cb;
width: 100%;
height: 85%;

`;
export const HeaderView = styled.View`
display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 50px
padding-right: 30px
`;

export const SubHeaderView = styled.View`
display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
padding-right: 50px
`;

export const HeaderTextView = styled(Text)`
font-size: 45px;
font-weight: 300;
color: #fff;
padding-left: 15px
`;

export const SubHeaderTextView = styled(Text)`
font-size: 30px;
font-weight: 200;
color: #fff;
padding-top: 30px
padding-right: 100px
`;

export const TextView = styled(Text)`
font-size: 25px;
font-weight: 100;
color: #fff;
padding-top: 20px
padding-left: 60px
`;

export const InputTextComponent = styled.SafeAreaView`
padding-top: 20px;
height: 100px;
width: 100%;
padding: 60px;
`;

export const InputComponent = styled.TextInput`
padding-right: 20px;
height: 50px;
background-color: #fff;
borderRadius: 5px;

`;

export const SmallText = styled.Text`
font-size: 12px;
font-weight: 100;
color: #fff;
padding-top: 50px;
padding-left: 80px;
`;

export const SmallBtn = styled.TouchableOpacity`
height: 20px;
width:70px;
border-color: #2972cb;
border-width:: 1px
`;

