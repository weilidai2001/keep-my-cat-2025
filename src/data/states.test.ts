import * as StatesModule from './states';

describe('getPreviousStates', () => {
  it('should return an empty array if no path is found', () => {
    // Mock implementation for this test
    const mockGetState = (stateId: StatesModule.StateKey) => {
      const mockStates: Record<string, StatesModule.MissionState> = {
        'state1': {
          heroImageUrl: '/test.jpg',
          animation: 'slide',
          choice1: {
            destination: 'state3',
            text: 'Go to state 3'
          },
          choice2: {
            destination: 'state4',
            text: 'Go to state 4'
          }
        },
        'state2': {
          heroImageUrl: '/test.jpg',
          animation: 'slide',
        }
      };
      return mockStates[stateId];
    };

    const result = StatesModule.getPreviousStates('state1' as StatesModule.StateKey, 'state2' as StatesModule.StateKey, mockGetState);
    expect(result).toEqual([]);
  });

  it('should find a direct path when current state leads directly to starting state', () => {
    // Mock implementation for this test
    const mockGetState = (stateId: StatesModule.StateKey) => {
      const mockStates: Record<string, StatesModule.MissionState> = {
        'state1': {
          heroImageUrl: '/test.jpg',
          animation: 'slide',
          choice1: {
            destination: 'state2',
            text: 'Go to state 2'
          }
        },
        'state2': {
          heroImageUrl: '/test2.jpg',
          animation: 'flip',
        }
      };
      return mockStates[stateId];
    };

    const result = StatesModule.getPreviousStates('state1' as StatesModule.StateKey, 'state2' as StatesModule.StateKey, mockGetState);
    expect(result).toEqual([
      { heroImageUrl: '/test.jpg', animation: 'slide', choice1: { destination: 'state2', text: 'Go to state 2' } },
      { heroImageUrl: '/test2.jpg', animation: 'flip' }
    ]);
  });

  it('should find a path through choice1', () => {
    // Mock implementation for this test
    const mockGetState = (stateId: StatesModule.StateKey) => {
      const mockStates: Record<string, StatesModule.MissionState> = {
        'state1': {
          heroImageUrl: '/test1.jpg',
          animation: 'slide',
          choice1: {
            destination: 'state2',
            text: 'Go to state 2'
          },
          choice2: {
            destination: 'state4',
            text: 'Go to state 4'
          }
        },
        'state2': {
          heroImageUrl: '/test2.jpg',
          animation: 'flip',
          choice1: {
            destination: 'state3',
            text: 'Go to state 3'
          }
        },
        'state3': {
          heroImageUrl: '/test3.jpg',
          animation: 'zoomIn',
        },
        'state4': {
          heroImageUrl: '/test4.jpg',
          animation: 'jackInTheBox',
        }
      };
      return mockStates[stateId];
    };

    const result = StatesModule.getPreviousStates('state1' as StatesModule.StateKey, 'state3' as StatesModule.StateKey, mockGetState);
    
    // The path should be state1 -> state2 -> state3
    expect(result).toHaveLength(3);
    expect(result[0].heroImageUrl).toBe('/test1.jpg');
    expect(result[1].heroImageUrl).toBe('/test2.jpg');
    expect(result[2].heroImageUrl).toBe('/test3.jpg');
  });

  it('should find a path through choice2 if choice1 fails', () => {
    // Mock implementation for this test
    const mockGetState = (stateId: StatesModule.StateKey) => {
      const mockStates: Record<string, StatesModule.MissionState> = {
        'state1': {
          heroImageUrl: '/test1.jpg',
          animation: 'slide',
          choice1: {
            destination: 'state2',
            text: 'Go to state 2'
          },
          choice2: {
            destination: 'state3',
            text: 'Go to state 3'
          }
        },
        'state2': {
          heroImageUrl: '/test2.jpg',
          animation: 'flip',
        },
        'state3': {
          heroImageUrl: '/test3.jpg',
          animation: 'zoomIn',
          choice1: {
            destination: 'state4',
            text: 'Go to state 4'
          }
        },
        'state4': {
          heroImageUrl: '/test4.jpg',
          animation: 'jackInTheBox',
        }
      };
      return mockStates[stateId];
    };

    const result = StatesModule.getPreviousStates('state1' as StatesModule.StateKey, 'state4' as StatesModule.StateKey, mockGetState);
    
    // The path should be state1 -> state3 -> state4
    expect(result).toHaveLength(3);
    expect(result[0].heroImageUrl).toBe('/test1.jpg');
    expect(result[1].heroImageUrl).toBe('/test3.jpg');
    expect(result[2].heroImageUrl).toBe('/test4.jpg');
  });

  it('should handle cycles in the state graph', () => {
    // Mock implementation for this test with a cycle
    const mockGetState = (stateId: StatesModule.StateKey) => {
      const mockStates: Record<string, StatesModule.MissionState> = {
        'state1': {
          heroImageUrl: '/test1.jpg',
          animation: 'slide',
          choice1: {
            destination: 'state2',
            text: 'Go to state 2'
          }
        },
        'state2': {
          heroImageUrl: '/test2.jpg',
          animation: 'flip',
          choice1: {
            destination: 'state3',
            text: 'Go to state 3'
          }
        },
        'state3': {
          heroImageUrl: '/test3.jpg',
          animation: 'zoomIn',
          choice1: {
            destination: 'state1', // Creates a cycle
            text: 'Go back to state 1'
          }
        }
      };
      return mockStates[stateId];
    };

    const result = StatesModule.getPreviousStates('state1' as StatesModule.StateKey, 'state3' as StatesModule.StateKey, mockGetState);
    
    // Should still find the path despite the cycle
    expect(result).toHaveLength(3);
    expect(result[0].heroImageUrl).toBe('/test1.jpg');
    expect(result[1].heroImageUrl).toBe('/test2.jpg');
    expect(result[2].heroImageUrl).toBe('/test3.jpg');
  });

  it('should return just the starting state if current state is the starting state', () => {
    // Mock implementation for this test
    const mockGetState = (stateId: StatesModule.StateKey) => {
      const mockStates: Record<string, StatesModule.MissionState> = {
        'state1': {
          heroImageUrl: '/test1.jpg',
          animation: 'slide',
        }
      };
      return mockStates[stateId];
    };

    const result = StatesModule.getPreviousStates('state1' as StatesModule.StateKey, 'state1' as StatesModule.StateKey, mockGetState);
    
    expect(result).toHaveLength(1);
    expect(result[0].heroImageUrl).toBe('/test1.jpg');
  });
});
