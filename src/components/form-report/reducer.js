export const initialState = {
  score: '',
  doing: '',
  feelings: '',
  goalValues: [],
};

export const getInitialState = (moodReport) => {
  const goalValues = moodReport.goalValues.map((goalValue) => {
    const intValue = goalValue.value && goalValue.value.__typename === 'GoalValueInt' ? goalValue.value : null;
    const boolValue = goalValue.value && goalValue.value.__typename === 'GoalValueBool' ? goalValue.value : null;

    return {
      goalId: goalValue.goal.id,
      intValue,
      boolValue,
    };
  });

  return {
    ...initialState,
    goalValues,
    score: moodReport.score,
    doing: moodReport.doing,
    feelings: moodReport.feelings,
  };
};

export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_DOING = 'UPDATE_DOING';
export const UPDATE_FEELINGS = 'UPDATE_FEELINGS';
export const UPDATE_GOAL_VALUE = 'UPDATE_GOAL_VALUE';

export const updateScore = (score) => ({
  type: UPDATE_SCORE,
  payload: {
    score,
  },
});

export const updateDoing = (doing) => ({
  type: UPDATE_DOING,
  payload: {
    doing,
  },
});

export const updateFeelings = (feelings) => ({
  type: UPDATE_FEELINGS,
  payload: {
    feelings,
  },
});

export const updateGoalValue = (goalId, type, value) => ({
  type: UPDATE_GOAL_VALUE,
  payload: {
    goalId,
    type,
    value,
  },
});

function reduceUpdateScore(state, action = {}) {
  return { ...state, score: parseInt(action.payload.score, 10) };
}

function reduceUpdateDoing(state, action = {}) {
  return { ...state, doing: action.payload.doing };
}

function reduceUpdateFeelings(state, action = {}) {
  return { ...state, feelings: action.payload.feelings };
}

function reduceUpdateGoalValue(state, action) {
  const { goalValues } = state;
  const { goalId, type, value } = action.payload;
  const goalValue = goalValues.find((gv) => gv.goalId === goalId);

  if (type === 'GoalTypeInt') {
    goalValue.intValue = parseInt(value, 10);
  }

  if (type === 'GoalTypeBool') {
    goalValue.boolValue = value;
  }

  return { ...state, goalValues: [...goalValues] };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SCORE:
      return reduceUpdateScore(state, action);
    case UPDATE_DOING:
      return reduceUpdateDoing(state, action);
    case UPDATE_FEELINGS:
      return reduceUpdateFeelings(state, action);
    case UPDATE_GOAL_VALUE:
      return reduceUpdateGoalValue(state, action);
    default:
      return state;
  }
}
