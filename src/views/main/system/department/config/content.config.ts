export const contentTableConfig = {
  title: '部门列表',
  propList: [
    { prop: 'name', label: '部门', minWidth: '100' },
    { prop: 'leader', label: 'leader', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  showSelectColumn: true
}
