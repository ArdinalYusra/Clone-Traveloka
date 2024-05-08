import { CategoryList } from "@/constanst";

const Purchase_Dashboard = () => {
  return (
    <div>
      <div>
        {CategoryList.slice(0, 7).map((item) => (
          <div key={item.label}>
            <li>{item.label}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase_Dashboard;
