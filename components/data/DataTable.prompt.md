Financial line-item table — plum/pink header, hairline rules, mono right-aligned figures, optional bold total row. The backbone of PRNG internal management reports.

```jsx
<DataTable
  columns={[
    {key:'cat', label:'Expense Category'},
    {key:'total', label:'12-Month Total', mono:true},
    {key:'avg', label:'Monthly Avg', mono:true},
  ]}
  rows={[
    {cat:'Payroll (wages + taxes)', total:'$241,867.64', avg:'$20,155.64'},
    {cat:'Fuel (all vehicles)', total:'$85,227.06', avg:'$7,102.26'},
  ]}
  totalRow={{cat:'Total Operating Expenses', total:'$781,939.47', avg:''}}
/>
```

Mark any row `__emph: true` to bold it. Use mono columns for all currency/percent figures.
