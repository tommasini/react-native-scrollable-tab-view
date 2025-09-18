import * as React from "react";
import { ViewStyle, TextStyle, ScrollViewProps } from "react-native";

export interface ScrollableTabViewProps {
  /**
   * Position of the tab bar
   */
  tabBarPosition?: "top" | "bottom" | "overlayTop" | "overlayBottom";

  /**
   * Initial page to show
   */
  initialPage?: number;

  /**
   * Current page
   */
  page?: number;

  /**
   * Callback when tab changes
   */
  onChangeTab?: (tab: { i: number; ref: any; from?: number }) => void;

  /**
   * Callback when scrolling
   */
  onScroll?: (x: number) => void;

  /**
   * Custom tab bar renderer
   */
  renderTabBar?: () => React.ReactElement | false;

  /**
   * Style for tab bar underline
   */
  tabBarUnderlineStyle?: ViewStyle;

  /**
   * Background color of tab bar
   */
  tabBarBackgroundColor?: string;

  /**
   * Active text color
   */
  tabBarActiveTextColor?: string;

  /**
   * Inactive text color
   */
  tabBarInactiveTextColor?: string;

  /**
   * Text style for tab bar
   */
  tabBarTextStyle?: TextStyle;

  /**
   * Style for the main container
   */
  style?: ViewStyle;

  /**
   * Props passed to the ScrollView/ViewPager
   */
  contentProps?: ScrollViewProps;

  /**
   * Change tab without animation
   */
  scrollWithoutAnimation?: boolean;

  /**
   * Lock scroll
   */
  locked?: boolean;

  /**
   * Pre-render sibling pages
   */
  prerenderingSiblingsNumber?: number;

  /**
   * Child components (tabs)
   */
  children?: React.ReactNode;
}

export interface DefaultTabBarProps {
  goToPage?: (pageNumber: number) => void;
  activeTab?: number;
  tabs?: Array<string | React.ReactElement>;
  backgroundColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  textStyle?: TextStyle;
  tabStyle?: ViewStyle;
  renderTab?: (
    name: string | React.ReactElement,
    page: number,
    isTabActive: boolean,
    onPressHandler: () => void
  ) => React.ReactElement;
  underlineStyle?: ViewStyle;
  style?: ViewStyle;
}

export interface ScrollableTabBarProps extends DefaultTabBarProps {
  scrollOffset?: number;
  tabsContainerStyle?: ViewStyle;
}

declare class DefaultTabBar extends React.Component<DefaultTabBarProps> {}
declare class ScrollableTabBar extends React.Component<ScrollableTabBarProps> {}

declare class ScrollableTabView extends React.Component<ScrollableTabViewProps> {
  static DefaultTabBar: typeof DefaultTabBar;
  static ScrollableTabBar: typeof ScrollableTabBar;

  goToPage(pageNumber: number): void;
}

export default ScrollableTabView;
export { DefaultTabBar, ScrollableTabBar };
