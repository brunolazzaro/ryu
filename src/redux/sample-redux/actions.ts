const Types = {
  SAMPLE_ACTION_TRIGGER: 'sample/ACTION_TRIGGER',
  SAMPLE_ACTION: 'sample/ACTION',
};

interface SampleAction {
  type: typeof Types.SAMPLE_ACTION;
  message: string;
}

interface SampleActionTrigger {
  type: typeof Types.SAMPLE_ACTION_TRIGGER;
  message: string;
}

const Actions = {
  sampleActionTrigger: (message: string): SampleActionTrigger => ({
    type: Types.SAMPLE_ACTION_TRIGGER,
    message,
  }),
};

export { Types, Actions };
export type SampleActionTypes = SampleAction | SampleActionTrigger;
