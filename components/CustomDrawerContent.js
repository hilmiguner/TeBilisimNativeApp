import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return(
        <DrawerContentScrollView>
            <DrawerItemList {...props}/>
            <DrawerItem label="deneme" labelStyle={{ color: "black"}}/>
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;