// export const getCurrentMonthStartDate = () => {
//     const currentDate = moment();
//     const startDate = currentDate.clone().startOf('month');

//     return startDate.unix();
// }
// export const getCurrentMonthEndDate = () => {
//     const currentDate = moment();
//     const endDate = currentDate.clone().endOf('month');

//     return endDate.unix();
// }
// export const getPreviousMonthStartDate = () => {
//     const currentDate = moment();
//     const startDate = currentDate.clone().subtract(1, 'month').startOf('month');

//     return startDate.unix();
// }
// export const getPreviousMonthEndDate = () => {
//     const currentDate = moment();
//     const endDate = currentDate.clone().subtract(1, 'month').endOf('month');

//     return endDate.unix();
// }

// export const Navigate = (key: string) => {
//     const navigate = useNavigate();
//     navigate(`/${key}`);
// }