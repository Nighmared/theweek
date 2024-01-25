import { ListItem, ListItemIcon } from "@mui/material";
import { Week } from "../util/types";

interface props {
  week: Week;
}

const WeekContainer: React.FC<props> = ({ week }) => {
  return (
    <ListItem>

    <div className="flex flex-row  text-4xl">
      <div className="flex" />
      {week.emoji && 
        (
          <ListItemIcon>{week.emoji}</ListItemIcon>
        )
      }
      {week.emoji===undefined &&
        (
          <ListItemIcon></ListItemIcon>
        )
      }
      <div>Woche {week.week.toString()}:&nbsp;</div>
      <div>
        {"  "} "<span className="text-vseth">{week.topic}</span>"
      </div>
    </div>

    </ListItem>
  );
};

export default WeekContainer;
