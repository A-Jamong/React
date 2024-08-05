// import TermAndConditions from '@/components/TermAndCondition.class';
import ExpandableText from './components/ExpandableText';
function Playground() {
  return (
    <>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus expedita
        aliquam quo voluptate deleniti eligendi officiis iusto quibusdam harum.
        Reprehenderit earum ab eum voluptatum fuga omnis maiores deleniti
        voluptas explicabo!
      </ExpandableText>
      <ExpandableText limit={100}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus expedita
        aliquam quo voluptate deleniti eligendi officiis iusto quibusdam harum.
        Reprehenderit earum ab eum voluptatum fuga omnis maiores deleniti
        voluptas explicabo!
      </ExpandableText>
      <ExpandableText limit={20}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus expedita
        aliquam quo voluptate deleniti eligendi officiis iusto quibusdam harum.
        Reprehenderit earum ab eum voluptatum fuga omnis maiores deleniti
        voluptas explicabo!
      </ExpandableText>
    </>
  );
}

export default Playground;
