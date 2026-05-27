// src/components/Elements/Icon.jsx
import { 
  FiGrid,           // Overview
  FiRepeat,         // Transaction  
  FiDollarSign,     // Balance
  FiFileText,       // Bill
  FiTrendingUp,     // Expense
  FiTarget,         // Goal
  FiSettings,       // Setting
  FiInfo,           // Detail
  FiChevronRight,   // ChevronRight
  FiLogOut          // Logout
} from 'react-icons/fi';

const Icon = {
  Overview: (props) => <FiGrid {...props} />,
  Transaction: (props) => <FiRepeat {...props} />,
  Balance: (props) => <FiDollarSign {...props} />,
  Bill: (props) => <FiFileText {...props} />,
  Expense: (props) => <FiTrendingUp {...props} />,
  Goal: (props) => <FiTarget {...props} />,
  Setting: (props) => <FiSettings {...props} />,
  Detail: (props) => <FiInfo {...props} />,
  ChevronRight: (props) => <FiChevronRight {...props} />,
  Logout: (props) => <FiLogOut {...props} />,
};

export default Icon;