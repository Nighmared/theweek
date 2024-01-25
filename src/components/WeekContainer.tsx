import { ListItemText } from "@mui/material";
import { Week } from "../util/types";

interface props{
    week: Week;
}

const WeekContainer: React.FC<props> = ({week}) => {
    return (
        <div className="flex flex-row text-vseth text-4xl">
            <div className="w-4/12"/>
            <div>Woche {week.week.toString()}</div>
            <div>: "<span className="text-white">{week.topic}</span>"</div>
        </div>
    )
}


export default WeekContainer;