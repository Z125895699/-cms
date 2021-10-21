export const searchFormConfig = {
  formItems: [
    {
      //传入类型  field字段
      field: 'name',
      type: 'input',
      label: '部门名',
      placeholder: '请输入部门名'
    },
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'createAt',
      type: 'datapicker',
      label: '创建时间',
      placeholder: '请输入创建时间范围'
    }
  ]
}
