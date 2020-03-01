export class AXBaseMenuItem {
  uid?: string = new Date().getTime().toString();
  id?: string;
  name?: string;
  text?: string;
  tooltip?: string;
  icon?: string;
  visible? = true;
  disable? = false;
  selected? = false;
  type? = 'primary';
  groupName?: string;
  data?: any;
  style?: string = 'ax light';
  orderIndex ? = 0;
  endIcon?: string;
  startIcon?: string;
}

export class AXMenuItem extends AXBaseMenuItem {
  items?: AXMenuItem[];
  parentId?: string;
  split?: boolean;
}

export class AXButtonItem extends AXBaseMenuItem {
  dropdown ? = false;
  submitBehavior ? = false;
  cancelBehavior ? = false;
}

export class AXCheckItem {
  text?: string;
  value?: any;
  selected?: boolean;
}
