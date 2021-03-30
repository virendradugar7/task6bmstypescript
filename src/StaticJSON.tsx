import IFilterList from './interfaces/FilterList.interface'
function getFilteroptions(){
    return{
        mainList: [ {
            value:"economy",
            label:"0-200rs"
        },
        {
            value:"middleclass",
            label:"201-399rs"
        },
        {
            value:"businessclass",
            label:"400-1000rs"
        }],
        timeList:[
            {
                        value:"morning",
                        label:"12:00-11:59AM"
                    },
                    {
                        value:"afternoon",
                        label:"12PM-3:59PM"
                    },
                    {
                        value:"evening",
                        label:"4PM-6:59PM"
                    },
                    {
                        value:"night",
                        label:"7PM-11:59PM"
                    }
        ],
    
    }
}
export default getFilteroptions;