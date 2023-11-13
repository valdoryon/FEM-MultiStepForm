export interface PlanData {
  name: string;
  price: string;
  priceNumber: number;
}

export interface BillingPlan {
  name: string;
  price: string;
  priceNumber: number;
}

export interface selectedBilling {
  Arcade: boolean;
  Advanced: boolean;
  Pro: boolean;
}

export interface selectedAddon {
  OnlineService: boolean;
  LargerStorage: boolean;
  CustomizableProfile: boolean;
}

export interface AppData {
  name: string;
  email: string;
  phone: string;
}

export interface AddonsData {
  name?: string;
  price?: string;
  priceNumber?: number;
}
