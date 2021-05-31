import Card from '../../Shared/Card';
import SizedBox from '../../Shared/SizedBox';
import CategoryItem from './CategoryItem';

const generateCard = (list) => {
    return list.map((item) => {
        console.log(item);
        return (
            <div key={item.id}>
                <Card height={50} borderColor="#37474f">
                    <CategoryItem
                        label={item.label}
                        icon={item.isOpen ? item.openIcon : item.closeIcon}
                    />
                </Card>
                <SizedBox axis="height" size="20" />
            </div>
        );
    });
};

const CategoryList = (props) => {
    return generateCard(props.list);
};

export default CategoryList;
